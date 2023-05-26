import { SocialNetworkTypeRepository } from "../../repositories/implementation/SocialNetworkTypeRepository";
import { CreateSocialNetworkTypeController } from "./CreateSocialNetworkTypeController";
import { CreateSocialNetworkTypeUseCase } from "./CreateSocialNetworkTypeUseCase";

const socialNetworkTypeRepository = new SocialNetworkTypeRepository();
const createSocialNetworkTypeUseCase = new CreateSocialNetworkTypeUseCase(
  socialNetworkTypeRepository
);
const createSocialNetworkController = new CreateSocialNetworkTypeController(
  createSocialNetworkTypeUseCase
);

export { createSocialNetworkController };
