class DigitalCamo {

  constructor(){
    this.dimensions = DigitalCamo.getBrowserDimeonsions();
    this.boxes = DigitalCamo.getBoxes(this.dimensions);
    this.numberOfBxoes = DigitalCamo.getNumberOfBoxes(this.boxes);
    DigitalCamo.generateCamoPattern(this.numberOfBxoes);
  }

  static getBrowserDimeonsions(){
    this.height = Math.round($(window).height()/ 10) * 10;
    this.width = Math.round($(window).width()/ 10) * 10;
    this.dimensions = {
      height: this.height,
      width: this.width
    };
    return this.dimensions;
  }

  static getBoxes(dimensions){
    this.boxesInHeight = dimensions.height / 10;
    this.boxesInWidth = dimensions.width / 10;
    this.boxes = {
      boxesInHeight: this.boxesInHeight,
      boxesInWidth: this.boxesInWidth
    };
    return this.boxes;
  }

  static getNumberOfBoxes(boxes){
    return boxes.boxesInHeight * boxes.boxesInWidth;
  }

  static generateCamoPattern(numberOfBxoes){
    for (var i = 0; i < numberOfBxoes; ++i) {
      var randomnumber = Math.floor(Math.random()*11)*10;
      var $div = $('<div />').appendTo('body');
      $div.attr('class', 'box red-' + randomnumber);
    }
  }
}
var camo = new DigitalCamo;
console.log(camo.dimensions);
