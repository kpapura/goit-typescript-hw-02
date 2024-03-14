/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props{
  [key:string]:string | number
}
class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Props> {
  pageInfo () {
    console.log(this.props.title);
  }
  
}
const PageProps: Props = { title: "Test" }
const page = new Page(PageProps)
page.pageInfo()

export {};