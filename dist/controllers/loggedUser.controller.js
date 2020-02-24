"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../modules/user/services/user.service");
class LoggedUserController {
    constructor() {
        this.user = new user_service_1.UserService();
    }
    update_profile(req, res) {
        const user_params = {
            address: req.body.address,
            telephone: req.body.telephone,
            username: req.body.username,
            password: req.body.password,
            uuid: req.body.uuid
        };
        this.user.getByUuid(req.body.uuid, (err, user_data) => {
            console.log(user_data);
            if (err) {
                res.status(111).json("Error");
            }
            else if (user_data === null) {
                res.status(111).json("Invalid uuid");
            }
            else {
                this.user.updateUser(user_params, (err) => {
                    if (err) {
                        res.status(111).json("Couldn't update");
                    }
                    else {
                        res.status(200).json("user updated");
                    }
                });
            }
        });
    }
}
exports.LoggedUserController = LoggedUserController;
//# sourceMappingURL=loggedUser.controller.js.map