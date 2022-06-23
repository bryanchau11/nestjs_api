import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { StudentTeacherController } from './student.controller';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
    imports: [StudentModule],
    controllers: [TeacherController, StudentTeacherController],       // Module exports   for controllers 
    providers: [TeacherService],        // Module exports for services
})
export class TeacherModule {}
