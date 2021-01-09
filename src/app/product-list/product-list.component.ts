import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  fullName: number;
  age: string;
  profession: string;
  number: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fullName: 1, age: 'Ondrea', profession: 'Hogsden', number: '921-503-3043'},
  {fullName: 2, age: 'Baily', profession: 'Itzkovwich', number: '227-813-4239'},
  {fullName: 3, age: 'Elysha', profession: 'Iwanczyk', number: '674-615-9405'},
  {fullName: 4, age: 'Boothe', profession: 'Pearsey', number: '701-267-1511'},
  {fullName: 5, age: 'Jessa', profession: 'Davy', number: '151-287-1124'},
  {fullName: 6, age: 'Kiley', profession: 'Turford', number: '577-627-0147'},
  {fullName: 7, age: 'Tadio', profession: 'Mumbeson', number: '803-184-3448'},
  {fullName: 8, age: 'Paula', profession: 'Bolitho', number: '705-880-9443'},
  {fullName: 9, age: 'Madelyn', profession: 'Steade', number: '623-856-1215'},
  {fullName: 10, age: 'Suki', profession: 'Chisnall', number: '792-613-9038'},
  {fullName: 11, age: 'Dredi', profession: 'Coursor', number: '497-265-0049'},
  {fullName: 12, age: 'Emylee', profession: 'Sedgmond', number: '983-773-3324'},
  {fullName: 13, age: 'Winny', profession: 'Border', number: '630-912-0285'},
  {fullName: 14, age: 'Ricoriki', profession: 'Orkney', number: '196-184-6909'},
  {fullName: 15, age: 'Dominga', profession: 'Hambers', number: '584-805-8374'},
  {fullName: 16, age: 'Daryn', profession: 'Eastby', number: '893-712-3601'},
  {fullName: 17, age: 'Adrea', profession: 'Fuzzey', number: '163-458-8163'},
  {fullName: 18, age: 'Randee', profession: 'Berre', number: '710-698-1157'},
  {fullName: 19, age: 'Margi', profession: 'Spedroni', number: '949-326-2287'},
  {fullName: 20, age: 'Rhianon', profession: 'Crecy', number: '726-478-4631'},
  {fullName: 21, age: 'Ernesta', profession: 'Munns', number: '891-780-1623'},
  {fullName: 22, age: 'Tarrance', profession: 'Fritschel', number: '724-552-9588'},
  {fullName: 23, age: 'Lila', profession: 'Binks', number: '347-637-5265'},
  {fullName: 24, age: 'Micheil', profession: 'Unger', number: '512-190-9841'},
  {fullName: 25, age: 'Hortensia', profession: 'Fendlen', number: '588-802-7218'},
  {fullName: 26, age: 'Aretha', profession: 'Keese', number: '213-110-6571'},
  {fullName: 27, age: 'Ollie', profession: 'Vedyaev', number: '725-215-3694'},
  {fullName: 28, age: 'Cora', profession: 'Poytres', number: '322-349-2316'},
  {fullName: 29, age: 'Ailina', profession: 'Algar', number: '806-811-1830'},
  {fullName: 30, age: 'Arie', profession: 'Hillborne', number: '193-681-5991'},
  {fullName: 31, age: 'Thelma', profession: 'Lant', number: '546-776-2391'},
  {fullName: 32, age: 'Cyndy', profession: 'Darcey', number: '214-218-8693'},
  {fullName: 33, age: 'Darice', profession: 'Kinnier', number: '441-115-7344'},
  {fullName: 34, age: 'Atlante', profession: 'Kingsly', number: '821-926-2266'},
  {fullName: 35, age: 'Magdalena', profession: 'Harrap', number: '836-835-5187'},
  {fullName: 36, age: 'Barrett', profession: 'Baldazzi', number: '738-617-3124'},
  {fullName: 37, age: 'Georgianna', profession: 'Ivashov', number: '771-411-4611'},
  {fullName: 38, age: 'Marget', profession: 'Guitt', number: '430-496-3111'},
  {fullName: 39, age: 'Estel', profession: 'Gimbart', number: '286-597-7893'},
  {fullName: 40, age: 'Daphna', profession: 'Scandrett', number: '405-201-1306'},
  {fullName: 41, age: 'Reggy', profession: 'Fargher', number: '932-842-2037'},
  {fullName: 42, age: 'Skipp', profession: 'Faire', number: '690-513-8204'},
  {fullName: 43, age: 'Filbert', profession: 'Beggan', number: '733-510-5948'},
  {fullName: 44, age: 'Waite', profession: 'Bottoms', number: '260-262-1056'},
  {fullName: 45, age: 'Tulley', profession: 'Murray', number: '623-116-5547'},
  {fullName: 46, age: 'Helaina', profession: 'Toynbee', number: '381-973-7100'},
  {fullName: 47, age: 'Tanner', profession: 'Drei', number: '251-485-6605'},
  {fullName: 48, age: 'Gan', profession: 'Corselles', number: '178-974-0157'},
  {fullName: 49, age: 'Lewie', profession: 'Fee', number: '198-984-2118'},
  {fullName: 50, age: 'Tadd', profession: 'Bonick', number: '825-216-5843'}
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit {
  displayedColumns = ['fullName', 'age', 'profession', 'number', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
