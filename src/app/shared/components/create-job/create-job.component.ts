import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobDetail } from '../../interfaces/jobDetail.interface';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  newJobForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _toastr: ToastrService
  ) {
    this.newJobForm = this._fb.group({
      'jobName': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])],
      'url': null,
      'companyName':  [null, Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      'description':  [null, Validators.required],
      'finishedStatus': null,
      'date': null,
      'tags': null
    });

   }

  ngOnInit() {
  }

  createNewJob() {
    if ( this.newJobForm.valid ) {
      const form = this.newJobForm.controls;
      const  job = {
        name : form.jobName.value,
        url : form.url.value,
        description : form.description.value,
        company : form.companyName.value,
        date : form.date.value,
        finished : form.finishedStatus.value,
        tags: form.tags.value.replace(/\s+/g, '')
      };

      this._userService.setJobList(job).then(
        data => {
          console.log(data);
          this._toastr.success('Inserido com sucesso');
          this.newJobForm.reset();
        }
      )
      .catch( err => {
        this._toastr.error('Aconteceu um erro');
        console.log(err);
      });
    } else {
      this._toastr.error('Aconteceu um erro');
      console.log (this.newJobForm.valid);
      console.log(this.newJobForm);
    }
  }

}
