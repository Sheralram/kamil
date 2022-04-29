import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
//import { NgxSpinnerService } from "ngx-spinner";
import { JSDocComment } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { LandingpageService } from '../core/services/landingpage.service';
import { NgxSpinnerService } from "ngx-bootstrap-spinner";

 

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  filterDataObj: any = "test"
  public dashboardSliderData: Array<any> = [];
  selectTab: string = "Summary";
  
  public closeResult: any;
  fieldList: any = [];

  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsDist: IDropdownSettings = {};

  districtList: any = [];
  districtSelectedItems: any = [];

  storeList: any = [];
  storeSelectedItems: any = [];

  SliderData: any = [];

  maxDate = new Date();
  selectDate: any;
  genderSelectedItems: any = [];
  genderList: any = [{
    "key": "male",
    "value": "Male",
  },
  {
    "key": "female",
    "value": "Female",
  }
    ,
  {
    "key": "Other",
    "value": "Other",
  }
  ]


  ageSelectedItems: any = [];
  ageList: any = [{
    "key": "0-20",
    "value": "0-20",
  },
  {
    "key": "20-40",
    "value": "20-40",
  },
  {
    "key": "Above 40",
    "value": "Above 40",
  },
  {
    "key": "Unknown",
    "value": "Unknown",
  },];

  cardlist: any = [{
    "categoryName": "Total Meeting",
    "value": "100",
  }, {
    "categoryName": "Avg Meeting Time",
    "value": "35 min",
  }, {
    "categoryName": "Total Transactions",
    "value": "2,335",

  }, {
    "categoryName": "Total Amount",
    "value": "2,54,335",
  }, {
    "categoryName": "$ per Transactions",
    "value": "60",
  }];
  constructor(private modalService: NgbModal, private toastr: ToastrService, private spinner: NgxSpinnerService, private landingService:LandingpageService ) {



   }
  showSuccess() {
    this.toastr.success('Successfully Login');
  }

 
    // loading triggered
 

  ngOnInit(): void {

    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

 

    
    this.getCarouselData();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'key',
      textField: 'value',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: false,
    };

    this.dropdownSettingsDist = {
      singleSelection: false,
      idField: 'key',
      textField: 'key',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: false,
    };
    if (localStorage.getItem('stores')) {
      let storeList: any = localStorage.getItem('stores')
      this.storeList = JSON.parse(storeList);

      console.log(this.storeList);

    }



    let districtList: any = localStorage.getItem('districts')
    this.districtList = JSON.parse(districtList);

    console.log("dstric res",this.districtList);



    if (localStorage.getItem('fields')) {
      let fieldList: any = localStorage.getItem('fields')
      this.fieldList = JSON.parse(fieldList)[1].values;
      this.selectDate = this.fieldList[0].value;
      console.log(this.fieldList);

    }





    // this.dashboardSliderData = [{
    // 	"categoryName": "Total Meeting",
    // 	"value": "100",
    //   "icon" : "user"
    // }, {
    // 	"categoryName": "Avg Meeting Time",
    // 	"value": "35 min",
    //   "icon" : "clock"
    // }, {
    // 	"categoryName": "Total Transactions",
    // 	"value": "2,335",
    //   "icon" : "vector"

    // },{
    // 	"categoryName": "Total Amount",
    // 	"value": "2,54,335",
    //   "icon" : "finance"
    // },{
    // 	"categoryName": "$ per Transactions",
    // 	"value": "60",
    //   "icon" : "avg"
    // }, {
    //   "categoryName": "Total Meeting",
    // 	"value": "100",
    //   "icon" : "user"
    // }, {
    // 	"categoryName": "Avg Meeting Time",
    // 	"value": "35 min",
    //   "icon" : "clock"
    // }, {
    // 	"categoryName": "Total Transactions",
    // 	"value": "2,335",
    //   "icon" : "vector"

    // },{
    // 	"categoryName": "Total Amount",
    // 	"value": "2,54,335",
    //   "icon" : "finance"
    // },{
    // 	"categoryName": "$ per Transactions",
    // 	"value": "60",
    //   "icon" : "avg"
    // }]

    if (localStorage.getItem('corosalList')) {
      let SliderData: any = localStorage.getItem('corosalList')
      this.dashboardSliderData = JSON.parse(SliderData)[0].carousels;

      console.log(JSON.parse(SliderData)[0].carousels);

    }
    this.dashboardSliderData = this.chunks(this.dashboardSliderData, 5);

    // this.districtList = [
    //   { "item_id": 1, "item_text": 'District 1' },
    //   { "item_id": 2, "item_text": 'District 2' },
    //   { "item_id": 3, "item_text": 'District 3' },
    //   { "item_id": 4, "item_text": 'District 4' },
    //   { "item_id": 5, "item_text": 'District 5' }
    // ];
    // this.districtSelectedItems = [
    //   { "item_id": 4, "item_text": 'District 4' }
    // ];



    // this.storeList = [
    //   { "item_id": 1, "item_text": 'Store 1' },
    //   { "item_id": 2, "item_text": 'Store 2' },
    //   { "item_id": 3, "item_text": 'Store 3' },
    //   { "item_id": 4, "item_text": 'Store 4' },
    //   { "item_id": 5, "item_text": 'Store 5' }
    // ];
    // this.storeSelectedItems = [
    //   { "item_id": 3, "item_text": 'Store 3' }

    this.lastYear();
    // ];

  //   this.spinner.show();

  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 2000);

  }

  getCarouselData(){

    let corData = localStorage.getItem('corosalList')?.toString();
   
    let val = JSON.parse(corData?corData:"");
    console.log("data fileds ");

    val[0].carousels.forEach(e => {

         let obj = {

          "fieldId":e.fieldId,
          "label":e.label,
          "type":e.type,
          "key":null
      
      }

      console.log(obj);

      // get data by field for  carousal

     this.landingService.getDataByField(obj).subscribe(res => {

      console.log(res);

      
     })
      

    });
  
  
  }

  printPage() {
    window.print();
  }

  isCardPopup: boolean = false;
  open(content: any, obj: any) {
    // if (obj.categoryName == "Total Amount") {
      // if (obj == "total-amount") {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        this.selectTab = 'Summary';
        this.isCardPopup = true;
      }, (reason) => {
        this.isCardPopup = false;
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    // }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  chunks(array: any, size: any) {
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  selectedTab(tab: string) {
    this.selectTab = tab;
  }

  isComparePopup: boolean = false;
  openCompare(content: any) {
    this.isComparePopup = false;
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.isComparePopup = true;
    }, (reason) => {
      this.isComparePopup = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  isCompareDatePopup: boolean = false;
  openCompareDate(content: any) {
    this.isComparePopup = false;
    this.modalService.open(content, { size: 'sm', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.isCompareDatePopup = true;
    }, (reason) => {
      this.isCompareDatePopup = false;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  dateRange: any;
  lastYear() {
    var LastYear = new Date();
    LastYear.setDate(LastYear.getDate() - 365);
    console.log(LastYear);
  }

  selectDateHandler(reference: any, modelData: string) {
    if (modelData == "custom") {
      this.openCompareDate(reference)
    }
  }

}


