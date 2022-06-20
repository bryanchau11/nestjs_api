import { Controller, Get, Post, Put, Param } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherID/students')
export class StudentTeacherController {
   constructor(private readonly studentService: StudentService){}
    @Get()
    getStudents(
        @Param('teacherID') teacherID: string
    ):FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherID)
    }
    @Put('/:studentID')
    updateStudentTeacher(
        @Param('teacherID') teacherID: string,
        @Param('studentID') studentID: string
    ):StudentResponseDto{
        return this.studentService.updateStudentTeacher(teacherID, studentID) 
    }
}
