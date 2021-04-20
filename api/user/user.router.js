const { createUser, getUser, getUserByUserId, updateUser, deleteUser, login } = require("./user.controller");
const router = require("express").Router();
const { chektoken } = require("../../auth/token_validation");

router.post("/", chektoken, createUser);
router.get("/", chektoken, getUser);
router.get("/:id", chektoken, getUserByUserId);
router.patch("/", chektoken, updateUser);
router.delete("/", chektoken, deleteUser);

router.post("/login", login);


module.exports = router;