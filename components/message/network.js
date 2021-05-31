const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", (req, res) => {
  const filterMessage = req.query.user || null;
  controller
    .listMessage(filterMessage)
    .then((messages) => {
      response.success(req, res, 200, messages);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        400,
        e,
        "[messageController] No se pudo obtener"
      );
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((message) => response.success(req, res, 201, message))
    .catch((e) =>
      response.error(req, res, 400, e, "[messageController] No se pudo guardar")
    );
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((message) => response.success(req, res, 200, message))
    .catch((e) =>
      response.error(req, res, 404, e, "[messageController] No se pudo guardar")
    );
});

router.delete("/:id", (req, res) => {
  controller
    .delMessage(req.params.id)
    .then((message) => response.success(req, res, 200, message))
    .catch((e) =>
      response.error(
        req,
        res,
        404,
        e,
        "[messageController] No se pudo eliminar"
      )
    );
});

module.exports = router;
