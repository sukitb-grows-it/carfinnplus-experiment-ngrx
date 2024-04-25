import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from '../../../../ckeditor5-custom-build/build/ckeditor';
import { style } from '@angular/animations';

@Component({
  selector: 'app-test-editor',
  templateUrl: './test-editor.component.html',
  styleUrl: './test-editor.component.scss',
})
export class TestEditorComponent {
  htmlTestContent = '';
  public editor:any = Editor;
  value = 'test'
  configHide:any = {
    toolbar: {
      items: []
    }
  }
  config:any = {
    toolbar: {
      items: [
        'undo',
        'redo',
        '|',
        'heading',
        'fontFamily',
        'fontSize',
        '|',
        'bold',
        'italic',
        'underline',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'link',
        'CKFinder',
        'imageUpload',
        'mediaEmbed',
        '|',
        'alignment',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'specialCharacters',
      ],
    },
    fontSize: {
      options: [
          10,
          20,
          'default',
          40,
          50,
      ]
  },
    language: 'id',
    image: {
      // styles: [ 'alignLeft', 'alignCenter', 'alignRight'],
      // resizeOptions: [
      //   {
      //     name:'resizeImage:original',
      //     label:'Original',
      //     value: null
      //   },
      //   {
      //     name:'resizeImage:50',
      //     label:'50%',
      //     value: 50
      //   },
      //   {
      //     name:'resizeImage:75',
      //     label:'75%',
      //     value: 75
      //   }
      // ],
      // toolbar: [
      //   'imageStyle:alignLeft','imageStyle:alignCenter','imageStyle:alignRight', 
      //   '|' ,
      //   'resizeImage',
      //   '|',
      //   'imageTextAlternative'
      // ]
      toolbar: ['imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|',
      'toggleImageCaption', 'imageTextAlternative'],
    },
    simpleUpload: {
      uploadUrl:'https://growsit-develop.com:5100/carfinn/v1/article/upload_article_image',
      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer WEW9ZUB64GDWD7Y4HN7CEP9YJ49L8LKZ7ZJT6Q2AEAKJWIUE'
      }
    }
  };

  ngOnInit() {
  }

  htmlContent = '';

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: 'arial',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      { class: 'kanit', name: 'Kanit' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl:
      'https://220c-171-103-29-110.ngrok-free.app/carfinn/v1/article/upload_article_image',
    // upload: (file: File) => { ... }
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['insertVideo']],
  };
}
