import { Router } from "express";
import { usersRoutes } from "./users.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { rolesRoutes } from "./roles.routes";
import { permissionRoutes } from "./permission.routes";
import { filesRoutes } from "./files.routes";
import { socialNetworkTypesRoutes } from "./socialNetworkTypes.routes";
import { socialNetworksRoutes } from "./socialNetwork.routes";
import { profilesRoutes } from "./profile.routes";
import { recoveyRoutes } from "./recovery.routes";
import { paymentRoutes } from "./payment.routes";
import { categoryRoutes } from "./category.routes";
import { announcementRoutes } from "./announcement.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/auth", authenticateRoutes);
router.use("/roles", rolesRoutes);
router.use("/permissions", permissionRoutes);
router.use("/files", filesRoutes);
router.use("/social-network-types", socialNetworkTypesRoutes);
router.use("/social-networks", socialNetworksRoutes);
router.use("/profiles", profilesRoutes);
router.use("/recovery", recoveyRoutes);
router.use("/payments", paymentRoutes);
router.use("/categories", categoryRoutes);
router.use("/announcements", announcementRoutes);

export { router };
