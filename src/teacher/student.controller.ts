import { Controller, Get, Post, Put, Param, ParseUUIDPipe } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherID/students')
export class StudentTeacherController {
   constructor(private readonly studentService: StudentService){}
    @Get()
    getStudents(
        @Param('teacherID', new ParseUUIDPipe()) teacherID: string
    ):FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherID)
    }
    @Put('/:studentID')
    updateStudentTeacher(
        @Param('teacherID', new ParseUUIDPipe()) teacherID: string,
        @Param('studentID', new ParseUUIDPipe()) studentID: string
    ):StudentResponseDto{
        return this.studentService.updateStudentTeacher(teacherID, studentID) 
    }
}
