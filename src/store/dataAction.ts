import DataItem from "@/model/DataItem";
import Category from "@/model/CateEnum";

// 用 localStorage 操作数据 做封装
class DataAction {
  dataKey: string;
  memoList!: Array<DataItem>;

  constructor(dataKey: string = "item") {
    this.dataKey = dataKey;
    this.memoList = this.readData();
  }

  readData() {
    let strData: string | null = localStorage.getItem(this.dataKey);
    let arrData: any[] = [];

    if (strData != null) {
      arrData = JSON.parse(strData);
    }

    return arrData;
  }

  addData(newData:DataItem):number {
      let dataArray = this.memoList

      if (dataArray == null) {
          dataArray = []
      }

      newData = 
  }
}

export default DataItem;
