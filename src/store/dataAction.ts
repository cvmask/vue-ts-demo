import DataItem from "@/model/DataItem";
import Category from "@/model/CateEnum";

// 用 localStorage 操作数据 做封装
class DataAction {
  dataKey: string;
  memoList!: Array<DataItem>;

  constructor(dataKey: string = "item") {
    this.dataKey = dataKey;
    // 读取 localStorage 中的数据
    this.memoList = this.readData();
  }

  readData():any {
    let strData: string | null = localStorage.getItem(this.dataKey);
    let arrData: any[] = [];

    if (strData != null) {
      arrData = JSON.parse(strData);
    }

    return arrData;
  }

  // 添加完数据，返回数据id
  addData(newData:DataItem):number {
      let dataArray = this.memoList

      if (dataArray == null) {
          dataArray = []
      }

      let newId = dataArray.length == 0 ? 1 : dataArray[dataArray.length - 1].id + 1
      newData.id = newId
      dataArray.push(newData)
      // 保存到 localStorage 中
      this.saveData(dataArray)

      return newId
  }

  saveData(arrData:Array<DataItem>):void {
    let str:string = JSON.stringify(arrData)
    window.localStorage.setItem(this.dataKey, str)
  }

  editData(item:DataItem) {
    let editData:DataItem|undefined = this.memoList.find(ele => {
      return ele.id === item.id
    })

    if (editData) {
      editData.categoryId = item.categoryId;
      editData.title = item.title;
      editData.content = item.content;
      this.saveData(this.memoList);
    }
  }

  removeData(id:string|number):boolean {
    let arr = this.memoList;
    let index = arr.findIndex(ele => {
      return ele.id === id;
    })

    if (index > -1) {
      arr.splice(index, 1);
      this.saveData(arr);
      return true;
    }

    return false;
  }
}

export default DataAction;
