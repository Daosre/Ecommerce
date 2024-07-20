import { Controller } from '@nestjs/common';
import { PanierService } from './panier.service';

@Controller('panier')
export class PanierController {
  constructor(private readonly panierService: PanierService) {}
}
