/*import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { Configuration } from '../constants/constants';

@Injectable()
export class CommanService {
	OptionData:object = {};
	AlertOption:object = {};
	presenttoast:any;
	presentloading:any;
	version:any;
	currentUser: any;
	extractData: any;
	handleError: any;
    constructor(
    	public configuration: Configuration,
    	public http: HttpClient,
    )
    {
    	
    }
  	postMethod(url, postData)
  	{
  		let a: any = {};
	    let headers = new HttpHeaders();
	    
		return this.http.post(this.configuration.BASE_URL+url+'?version='+this.version+'&lang=English', JSON.stringify(postData),{
	        headers:headers
	    }).pipe(
			map(this.extractData),
			catchError(this.handleError)
		);
  	}

  	sendToken(token: string) { localStorage.setItem("LoggedInUser", token)}
	getToken(){return localStorage.getItem("LoggedInUser")}
	isLoggedIn() { return this.getToken() !== null;}
	logout() { localStorage.removeItem("LoggedInUser");}
}
*/


import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as _ from 'underscore';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { Configuration } from '../constants/constants';

@Injectable()
export class CommanService {
	OptionData:object = {};
	AlertOption:object = {};
	presenttoast:any;
	presentloading:any;
	version:any;
	currentUser: any;
    constructor(
    	public configuration: Configuration,
    	public http: HttpClient,
    )
    {
    	
    }

  	/* Post methods */
  	async postMethod(url, postData)
  	{
  		let a: any = {};
	    let headers = new HttpHeaders({});
	      return  await this.http.post(this.configuration.BASE_URL+url+'?version='+this.version+'&lang=English', postData,{
	        headers:headers
	    })
	    .toPromise()
	    .then(async res => {
	    	return  await JSON.parse(JSON.stringify(res));
	    	/*if(res.json().status)
	          	return  await res.json();  
	        else
	        	return await res.json();*/
	    }, err => {
	       console.log('Something went worngs.');
	    });

	    /*return  await this.http.post(this.configuration.BASE_URL+url+'?version='+this.version+'&lang=English',postData)
	    .subscribe(async (res:Response) =>  { 
	    	return  await res.json();
	    },
	    err => {
	       console.log('Something went worngs.');
	    });*/
  	}

  	sendToken(token: string) { localStorage.setItem("LoggedInUser", token)}
  	clearToken() { localStorage.removeItem("LoggedInUser")}
	getToken(){return localStorage.getItem("LoggedInUser")}
	isLoggedIn() { return this.getToken() !== null;}
	logout() { localStorage.removeItem("LoggedInUser");}
}
