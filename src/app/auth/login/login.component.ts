import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
//import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm: FormGroup = new FormGroup;
  // loginForm: FormGroup = new FormGroup;
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  submitted = false;
  fcmToken: any;
  fieldTextType: boolean = false;
  public loading = false;
 // showSuccess: any;

  constructor(  private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private authsService: AuthService,
   private router: Router) {
  }
  showSuccess() {
    this.toastr.success('Successfully Login');
  }

  errorMessage(){
    {
      this.toastr.error("Enter valid user", 'Alert', {
        positionClass: 'toast-top-right', timeOut: 5000, tapToDismiss: true
      });
    }
  }

    
 

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  submitLoginDetails() {
    this.submitted = true;
    // if (this.loginForm.valid) {
    //   this.spinner.show();
    //   let loginObj = this.loginForm.value;

    /*  login authentication  */

    console.log(this.loginForm);

    

    this.authsService.loginUser(this.loginForm.value).subscribe(res => {

      console.log(res);
      let response : any = res ;
      var token = response.token ;
      localStorage.setItem('districts',JSON.stringify(response.loginInfo.userType.districts));
      localStorage.setItem('stores',JSON.stringify(response.loginInfo.userType.stores));
     localStorage.setItem('corosalList',JSON.stringify(response.loginInfo.userType.userdetail.corosalList));
      localStorage.setItem('fields',JSON.stringify(response.loginInfo.userType.userdetail.fieldlist));
      if (token == null ){
        
        //  rediredt ro login page
      }else {
        localStorage.setItem("authToken",token);
        localStorage.setItem("userInfo" , JSON.stringify(response.loginInfo.userType.login.associate))

       
        // redirect to landing page)
       this.router.navigate(['/landing-page']);
       this.showSuccess();
    


    
      }

      

    
    
      


         
     
     



    })




    // this.router.navigate(['/landing-page']);

    // this.authsService.loginUser(loginObj).subscribe(((res: any) => {
    //   localStorage.setItem('access_token', res['access_token']);
    //   localStorage.setItem('isLoggedin', 'true');
    //   localStorage.setItem('userId', res['userId']);
    //   localStorage.setItem('roleId', res.roles[0].id);
    //   if (res.roles[0].id == 2) {
    //     localStorage.setItem('isTeacherLoggedin', 'true');
    //     if (res.approvalStatus === 'pending') {
    //       this.router.navigate(['/layout/teacher/edit-profile']);
    //     } else {
    //       this.router.navigate(['/layout/teacher']);
    //     }
    //   } else if (res.roles[0].id == 3) {
    //     localStorage.setItem('isStudentLoggedin', 'true');
    //     this.router.navigate(['/layout/student']);
    //   } else {
    //     this.router.navigate(['/layout']);
    //   }
    //   this.loginForm.reset();
    //   this.submitted = false;
    // }), error => {
    //   this.spinner.hide();
    //   if (error.status === 401) {
    //     this.toastr.error(error.error.message);
    //     return;
    //   } else if (error.status === 403) {
    //     this.toastr.error('Unauthorized Access: please contact the administrator');
    //   } else if (error.status === 501) {
    //     this.toastr.error('Something went wrong!');
    //   }
    // });
    // } else {
    //   this.spinner.hide();
    //   this.toastr.error('Please enter a valid Email and Password');
    // }
  }


}
