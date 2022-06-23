import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers : [StudentController],  // Module constructor   for studentService methods
    providers: [StudentService], //  Module providers
    exports: [StudentService], 
})
export class StudentModule {}
