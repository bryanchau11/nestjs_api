import { Module } from '@nestjs/common';
import { StudentController} from '../student/student.controller'
import {TeacherController} from '../teacher/teacher.controller'
import {StudentTeacherController} from '../teacher/student.controller'
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';
import { TeacherModule } from 'src/teacher/teacher.module';
import { StudentModule } from 'src/student/student.module';
@Module({
  imports: [TeacherModule, StudentModule],
  // Get rid of controllers and providers because we make a new module with controllers and providers for each student
  // and teacher controllers. Then import them to this module.
  //controllers: [StudentController,TeacherController, StudentTeacherController],
  //providers:[StudentService, TeacherService]
})
export class AppModule {}
