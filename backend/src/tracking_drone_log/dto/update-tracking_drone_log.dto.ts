import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTrackingDroneLogDto } from './create-tracking_drone_log.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateTrackingDroneLogDto extends PartialType(
  CreateTrackingDroneLogDto,
) {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id!: number;

  @ApiProperty({ example: 'Entered' })
  @IsString()
  //   eg. "Entered" or "Exited"
  drone_action!: string;

  @ApiProperty({ example: 100 })
  @IsNumber()
  bbox_x1!: number;

  @ApiProperty({ example: 100 })
  @IsNumber()
  bbox_y1!: number;

  @ApiProperty({ example: 200 })
  @IsNumber()
  bbox_x2!: number;

  @ApiProperty({ example: 200 })
  @IsNumber()
  bbox_y2!: number;

  @ApiProperty({ example: 0.9 })
  @IsNumber()
  confidence_score!: number;
}
