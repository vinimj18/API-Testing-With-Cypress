describe("PUT /tasks/:id/done", () => {
  beforeEach(function () {
    cy.fixture("tasks/put").then(function (tasks) {
      this.tasks = tasks;
    });
  });

  it("update task", function () {
    const { user, task } = this.tasks.update;

    cy.task("removeTask", task.name, user.email);
    cy.task("removeUser", user.email);
    cy.postUser(user);

    cy.postSession(user).then((respUser) => {
      cy.postTask(task, respUser.body.token).then((respTask) => {
        const id = respTask.body._id;
        cy.putTask(id, respUser.body.token).then((response) => {
          expect(response.status).to.eq(204);
          cy.getUniqueTask(id, respUser.body.token).then((response) => {
            expect(response.body.is_done).to.be.true;
          });
        });
      });
    });
  });

  it("task not found", function () {
    const { user, task } = this.tasks.not_found;

    cy.task("removeTask", task.name, user.email);
    cy.task("removeUser", user.email);
    cy.postUser(user);

    cy.postSession(user).then((respUser) => {
      cy.postTask(task, respUser.body.token).then((respTask) => {
        const id = respTask.body._id;

        cy.deleteTask(id, respUser.body.token).then((response) => {
          expect(response.status).to.eq(204);
        });

        cy.putTask(id, respUser.body.token).then((response) => {
          expect(response.status).to.eq(404);
        });
      });
    });
  });
});
