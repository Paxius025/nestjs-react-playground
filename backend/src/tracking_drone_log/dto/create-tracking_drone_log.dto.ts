import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTrackingDroneLogDto {
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

  @ApiProperty({ example: 0.92 })
  @IsNumber({ maxDecimalPlaces: 2 })
  confidence_score!: number;
}
