import express, {Router} from 'express';
import {UserController} from '../controllers/user.controller';
import {AuthMiddleware} from '../middlewares/auth.middleware';

const router: Router = express.Router();
const userController: UserController = new UserController();

router.use(AuthMiddleware.checkToken);
router.post('/create', AuthMiddleware.checkScopes(['user:create']), userController.createUser);

export default router;
