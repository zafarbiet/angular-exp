export class Sort {
  private sortOrder = 1;
  private collator = new Intl.Collator(undefined, {
    numeric:true,
    sensitivity: "base"
  })

  public startSort(property:any, order:any) {
    if(order === "desc") {
      this.sortOrder = -1;
    }

    return(a:any,b:any) =>{
      return this.collator.compare(a[property], b[property]) * this.sortOrder;
    }
  }
}
