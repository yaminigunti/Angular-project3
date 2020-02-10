import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contacts:Contact[];

  constructor() {
    this.contacts=[
      {contactID:101,firstName:"yamini",lastName:"shetty",dob:new Date("1999-02-12"),mobileNumber:"876543234",mailId:"xyz@gmail.com",organization:"cts"},
      {contactID:102,firstName:"preethi",lastName:"shetty",dob:new Date("1997-04-22"),mobileNumber:"9877643234",mailId:"xfdyz@gmail.com",organization:"cts"},
     {contactID:103,firstName:"krish",lastName:"vamsy",dob:new Date("1999-03-12"),mobileNumber:"876547234",mailId:"xysgrz@gmail.com",organization:"cts"},
     {contactID:104,firstName:"jaanu",lastName:"shetty",dob:new Date("1998-02-12"),mobileNumber:"8776873234",mailId:"xvdfyz@gmail.com",organization:"cts"}
    
    ]
   }
   getAll():Contact[]{
     return this.contacts;
   }

   get(id:number){
     return this.contacts.find((c)=>(c.contactID==id));
   }

   add(contact:Contact){
     this.contacts.push(contact);
   }

   update(contact:Contact){
     let index=this.contacts.findIndex((c)=>(c.contactID==contact.contactID));
     if(index>-1){
     this.contacts[index]=contact;
     }
   }

   delete(id:number){
    let index=this.contacts.findIndex((contact)=>(contact.contactID===id));
    if(index>-1){
    this.contacts.splice(index,1);
    }
  }
}
