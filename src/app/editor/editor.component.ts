import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  content = '' ;
  codeObj :any
  @Input() languageName: any;
  @Input() displayName: any;
  @Input() value: any;
  @Output() callParent = new EventEmitter();
  srcHTML=''; srcCSS=''; srcJS='';
  srcCode: any;

  setEditorContent(event:any, lang:any) {
    
    //here one switch and pass the sreCode
    switch(lang) {
      case 'xml':
        window.localStorage.setItem("srcHTML_localS", event);
        break;
      case 'css':
        window.localStorage.setItem("srcCSS_localS", event);
        break;
      case 'javascript':
        window.localStorage.setItem("srcJS_localS", event);
        break;
  
      default:
      // code block
    }
    this.srcCode = '<!DOCTYPE html><html><body>'+ window.localStorage.getItem("srcHTML_localS") +'</body><style>'+  window.localStorage.getItem("srcCSS_localS") +'</style><script>'+  window.localStorage.getItem("srcJS_localS")+'</script></html>';
    this.callParent.emit(this.srcCode);
    console.log(event, typeof event);
    console.log('I am chld', lang);
    
  }
  /*
  props = {
    language,
    displayName,
    value,
    onChange
  } as const;
  
  handleChange(editor, data, value){
    onchange(value)
  }*/
}
