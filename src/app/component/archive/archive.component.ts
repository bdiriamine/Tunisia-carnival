import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  browser: any;
  constructor(private plateform: Platform,private file : File,private filetrans :FileTransfer,private fileOpener :FileOpener,private doc : DocumentViewer) {}
  ngOnInit() {}
  openLocalPdf(){
let filepath = this.file.applicationDirectory+'www/assets';
  if(this.plateform.is('android')){
 let fakename = Date.now();
 this.file.copyFile(filepath,'rapport2017.pdf',this.file.dataDirectory,`${fakename}.pdf`).then(result =>{
  this.fileOpener.open(result.nativeURL,'application/pdf')
 });
  }else{
    const options: DocumentViewerOptions={
      title:'My PDF'
    }
    this.doc.viewDocument(`${filepath}/rapport2017.pdf`,'application/pdf',options)
  }
}
  downloandandopenpdf(){
 let downloadUrl = 'http://www.tunisiacarnival.com/wp-content/uploads/2018/10/rapport2017.pdf';
    let path = this.file.dataDirectory;
    const transfer = this.filetrans.create()
    transfer.download(downloadUrl,`${path}/rapport2017.pdf`).then(entry =>{
      let url = entry.toURL();
      if(this.plateform.is('ios')){
this.doc.viewDocument(url,'application/pdf',{});
      }else{
 this.fileOpener.open(url,'application/pdf');
      }
    });
   
}
}



