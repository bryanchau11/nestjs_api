import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';
@Controller('teachers')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService){

    }
    @Get()
    getTeachers():FindTeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }
    @Get(':teacherID')
    getTeacherByID(@Param('teacherID', new ParseUUIDPipe()) teacherID:string):FindTeacherResponseDto {
        return this.teacherService.getTeacherById(teacherID)
    }
    
}
