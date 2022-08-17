
import {AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';

import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styles:[`
    .example-button-row .mat-button-base {
        margin: 8px 8px 8px 10px;
      }
      
    `]
})


export class ExampleComponent implements OnInit {
    
    juniordataList:any 
  resultsLength = 0;
  startdate = new Date();
  enddate = new Date();
    Payees: any =[];
    Childs: any  =[];
  constructor(private formBuilder: FormBuilder) 
  {
    

  
  }



  ngOnInit(){
    //debugger;
    //this.Payees = this.juniordataList.get
 this.DataLoad();
this.juniordataList.forEach(element => {
    if(!this.Payees.includes(element.payeeName)){
        this.Payees.push(element.payeeName);
    }
    if(!this.Childs.includes(element.childName)){
        this.Childs.push(element.childName);
    }
});

    
    
}
DataLoad(){
  this.juniordataList = [{payeeName: 'Jhon Deo', childName: 'Barlin',startDate:new Date('13 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:450.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:470.36 ,  over:850.36 ,  pendingcreditNote:150.36 ,  totalPending:350.36},
  {payeeName: 'Jhon Deo', childName: 'Maqui',startDate:new Date('13 Aug 2022') ,endDate:'10 Aug 2019', weekvalue_3:150.36,  weekvalue_2:450.36,  weekvalue_1:650.36 ,  current:550.36 ,  pending:450.36 ,  over:458.36 ,  pendingcreditNote:250.36 ,  totalPending:450.36},
  {payeeName: 'Jhon Deo', childName: 'Liton',startDate:new Date('12 Aug 2022') ,endDate:new Date('14 Aug 2022'), weekvalue_3:2050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Jhon Deo', childName: 'Faruk',startDate:new Date('13 Aug 2022') ,endDate:new Date('15 Aug 2022'), weekvalue_3:250.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Jhon Deo', childName: 'Saykat',startDate:new Date('13 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:1050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  // kquc
  {payeeName: 'kquc', childName: 'Maqui',startDate:new Date('13 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:150.36,  weekvalue_2:450.36,  weekvalue_1:650.36 ,  current:550.36 ,  pending:450.36 ,  over:458.36 ,  pendingcreditNote:250.36 ,  totalPending:450.36},
  {payeeName: 'kquc', childName: 'Liton',startDate:new Date(new Date('13 Aug 2022')) ,endDate:new Date('12 Aug 2022'), weekvalue_3:2050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'kquc', childName: 'Faruk',startDate:new Date('12 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:250.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'kquc', childName: 'Saykat',startDate:new Date('12 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:1050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},

  // Adam
  {payeeName: 'Adam', childName: 'Rabin',startDate:new Date('12 Aug 2022') ,endDate:'12 Aug 2019', weekvalue_3:150.36,  weekvalue_2:450.36,  weekvalue_1:650.36 ,  current:550.36 ,  pending:450.36 ,  over:458.36 ,  pendingcreditNote:250.36 ,  totalPending:450.36},
  {payeeName: 'Adam', childName: 'felon',startDate:new Date('12 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:2050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Adam', childName: 'Telon',startDate:new Date('12 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:250.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Adam', childName: 'Saykat',startDate:new Date('14 Aug 2022') ,endDate:new Date('14 Aug 2022'), weekvalue_3:1050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},

  // Hyden
  {payeeName: 'Hyden', childName: 'Rabin',startDate:new Date('14 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:150.36,  weekvalue_2:450.36,  weekvalue_1:650.36 ,  current:550.36 ,  pending:450.36 ,  over:458.36 ,  pendingcreditNote:250.36 ,  totalPending:450.36},
  {payeeName: 'Hyden', childName: 'felon',startDate:new Date('14 Aug 2022') ,endDate:new Date('14 Aug 2022'), weekvalue_3:2050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Hyden', childName: 'Telon',startDate:new Date('14 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:250.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Hyden', childName: 'Saykat',startDate:new Date('13 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:1050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},

  // Palak
  {payeeName: 'Palak', childName: 'Maqui',startDate:new Date('13 Aug 2022') ,endDate:new Date('12 Aug 2022'), weekvalue_3:150.36,  weekvalue_2:450.36,  weekvalue_1:650.36 ,  current:550.36 ,  pending:450.36 ,  over:458.36 ,  pendingcreditNote:250.36 ,  totalPending:450.36},
  {payeeName: 'Palak', childName: 'felon',startDate:new Date('13 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:2050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Palak', childName: 'Telon',startDate:new Date('13 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:250.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},
  {payeeName: 'Palak', childName: 'Saykat',startDate:new Date('13 Aug 2022') ,endDate:new Date('13 Aug 2022'), weekvalue_3:1050.36,  weekvalue_2:350.36,  weekvalue_1:950.36 ,  current:450.36 ,  pending:450.36 ,  over:130.36 ,  pendingcreditNote:500.36 ,  totalPending:450.36},

];
}


juniorsearchobj = this.formBuilder.group({
    payeeName: [''],
    childName: [''],
    startDate:[''],
    endDate:['']
  });


  onSearch() {
    debugger;
   var searchObj= this.juniorsearchobj.value;
   var oResult = this.juniordataList;
   if(searchObj.payeeName!="" && searchObj.payeeName!=null){
    oResult =  this.juniordataList.filter(x => x.payeeName==searchObj.payeeName);

   }
   if(searchObj.childName!="" && searchObj.childName!=null){
    oResult =  oResult.filter(x => x.childName==searchObj.childName);
   }
   if(searchObj.startDate!="" && searchObj.startDate!=null){
    oResult =  oResult.filter(x =>this.nanodateformat(x.startDate)===this.nanodateformat(searchObj.startDate));
   }
   if(searchObj.endDate!="" && searchObj.endDate!=null){
    oResult =  oResult.filter(x =>this.nanodateformat(x.endDate)===this.nanodateformat(searchObj.endDate));
   }

  this.juniordataList =oResult;
  return oResult;
  }
  resetForm() {
  //  this.Payees = [];
   // this.Childs = [];
    this.juniorsearchobj.reset();
    this.DataLoad();
  }


  
  nanodateformat(date) {
    var mthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var y = date.getFullYear();
    var m = date.getMonth();
    var d = this.nanoCustomStringFormat(date.getDate(), '00');
    //return m+'/'+d+'/'+y;
    var result = d + ' ' + mthNames[m] + ' ' + y;
    return result;
  }

  nanoCustomStringFormat(nInteger, sFormat) {
    var sInteger = nInteger.toString();
    var lenDIff;
    (sFormat.length > sInteger.length) ? lenDIff = sFormat.length - sInteger.length : lenDIff = 0;
    return sFormat.substring(0, lenDIff) + sInteger;
  }
}
