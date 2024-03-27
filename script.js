
let container = document.createElement('div');

let col1 = document.createElement('div');
let name1= document.createElement('div');
let name11 = document.createElement('h1');
name1.innerHTML = "Vipul Goutam";

container.classList.add('container');
col1.classList.add('col-1');
name1.classList.add('name');
name11.classList.add('h1');

col1.appendChild(name1);
name1.appendChild(name11);

let personal = document.createElement('div');
let h2 = document.createElement('h2');
h2.innerHTML = "Personal Details";
let hr1 = document.createElement('hr');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let i1 = document.createElement('i');
let i2 = document.createElement('i');
let i3 = document.createElement('i');
let i4 = document.createElement('i');



i1.classList.add("fa-solid");
i1.classList.add('fa-envelope')

i2.classList.add("fa-solid");
i2.classList.add('fa-phone')

i3.classList.add("fa-solid");
i3.classList.add('fa-house')

i4.classList.add("fa-brands");
i4.classList.add('fa-linkedin')



container.appendChild(col1);



col1.appendChild(personal);




personal.appendChild(h2);
personal.appendChild(hr1);
personal.appendChild(p1);
personal.appendChild(p2);
personal.appendChild(p3);
personal.appendChild(p4);
p1.appendChild(i1);
p2.appendChild(i2);
p3.appendChild(i3);
p4.appendChild(i4);


let p1update = p1.innerHTML;
p1update = p1update + "&nbsp; &nbsp;vipulgoutam03@gmail.com";
p1.innerHTML = p1update;


let p2update = p2.innerHTML;
p2update = p2update + "&nbsp; &nbsp;+91 8899182546";
p2.innerHTML = p2update;

let p3update = p3.innerHTML;
p3update = p3update + " &nbsp; &nbsp; F-71 Maheshpura near GMC Jammu";
p3.innerHTML=p3update;

let p4update = p4.innerHTML;
p4update = p4.innerHTML + "&nbsp;&nbsp;&nbsp;linkedin.com/in/vipul-goutam-22834a239";
p4.innerHTML= p4update;

////////////////////////////////
// SKILLS SECTION
////////////////////////////////


let skills = document.createElement('div');
let h21= document.createElement('h2');
let hr2 = document.createElement('hr');
let table1 = document.createElement('table');


let i11 = document.createElement('i');
i11.classList.add('fa-solid');
i11.classList.add("fa-circle");
i11.classList.add("c1");

let i12 = document.createElement('i');
i12.classList.add('fa-solid');
i12.classList.add("fa-circle");
i12.classList.add("c1");

let i13 = document.createElement('i');
i13.classList.add('fa-solid');
i13.classList.add("fa-circle");
i13.classList.add("c1");


let i14 = document.createElement('i');
i14.classList.add('fa-solid');
i14.classList.add("fa-circle");
i14.classList.add("c1");

let i15 = document.createElement('i');
i15.classList.add('fa-solid');
i15.classList.add("fa-circle");
i15.classList.add("c1");

let i21 = document.createElement('i');
i21.classList.add('fa-solid');
i21.classList.add("fa-circle");
i21.classList.add("c1");

let i22 = document.createElement('i');
i22.classList.add('fa-solid');
i22.classList.add("fa-circle");
i22.classList.add("c1");

let i23 = document.createElement('i');
i23.classList.add('fa-solid');
i23.classList.add("fa-circle");
i23.classList.add("c1");

let i24 = document.createElement('i');
i24.classList.add('fa-solid');
i24.classList.add("fa-circle");
i24.classList.add("c1");

let i25 = document.createElement('i');
i25.classList.add('fa-solid');
i25.classList.add("fa-circle");
i25.classList.add("c1");

let i31 = document.createElement('i');
i31.classList.add('fa-solid');
i31.classList.add("fa-circle");
i31.classList.add("c1");


let i32 = document.createElement('i');
i32.classList.add('fa-solid');
i32.classList.add("fa-circle");
i25.classList.add("c1");


let i33 = document.createElement('i');
i33.classList.add('fa-solid');
i33.classList.add("fa-circle");
i33.classList.add("c1");

let i34 = document.createElement('i');
i34.classList.add('fa-solid');
i34.classList.add("fa-circle");
i34.classList.add("c1");


let i35 = document.createElement('i');
i35.classList.add('fa-solid');
i35.classList.add("fa-circle");
i35.classList.add("c1");


let i41 = document.createElement('i');
i41.classList.add('fa-solid');
i41.classList.add("fa-circle");
i41.classList.add("c1");


let i42 = document.createElement('i');
i42.classList.add('fa-solid');
i42.classList.add("fa-circle");
i42.classList.add("c1");


let i43 = document.createElement('i');
i43.classList.add('fa-solid');
i43.classList.add("fa-circle");
i43.classList.add("c1");


let i44 = document.createElement('i');
i44.classList.add('fa-solid');
i44.classList.add("fa-circle");
i44.classList.add("c1");


let i45 = document.createElement('i');
i45.classList.add('fa-solid');
i45.classList.add("fa-circle");
i45.classList.add("c1");

let i51 = document.createElement('i');
i51.classList.add('fa-solid');
i51.classList.add("fa-circle");
i51.classList.add("c1");


let i52 = document.createElement('i');
i52.classList.add('fa-solid');
i52.classList.add("fa-circle");
i52.classList.add("c1");


let i53 = document.createElement('i');
i53.classList.add('fa-solid');
i53.classList.add("fa-circle");
i53.classList.add("c1");


let i54 = document.createElement('i');
i54.classList.add('fa-solid');
i54.classList.add("fa-circle");
i54.classList.add("c1");


let i55 = document.createElement('i');
i55.classList.add('fa-solid');
i55.classList.add("fa-circle");
i55.classList.add("c1");

let i61 = document.createElement('i');
i61.classList.add('fa-solid');
i61.classList.add("fa-circle");
i61.classList.add("c1");


let i62 = document.createElement('i');
i62.classList.add('fa-solid');
i62.classList.add("fa-circle");
i62.classList.add("c1");


let i63 = document.createElement('i');
i63.classList.add('fa-solid');
i63.classList.add("fa-circle");
i63.classList.add("c1");


let i64 = document.createElement('i');
i64.classList.add('fa-solid');
i64.classList.add("fa-circle");
i64.classList.add("c1");


let i65 = document.createElement('i');
i65.classList.add('fa-solid');
i65.classList.add("fa-circle");
i65.classList.add("c1");

let i71 = document.createElement('i');
i71.classList.add('fa-solid');
i71.classList.add("fa-circle");
i71.classList.add("c1");


let i72 = document.createElement('i');
i72.classList.add('fa-solid');
i72.classList.add("fa-circle");
i72.classList.add("c1");


let i73 = document.createElement('i');
i73.classList.add('fa-solid');
i73.classList.add("fa-circle");
i73.classList.add("c1");


let i74 = document.createElement('i');
i74.classList.add('fa-solid');
i74.classList.add("fa-circle");
i74.classList.add("c1");


let i75 = document.createElement('i');
i75.classList.add('fa-solid');
i75.classList.add("fa-circle");
i75.classList.add("c1");



h2.innerHTML="Skills";


let tr1 =  document.createElement('tr');
let td11 =  document.createElement('td');
td11.innerHTML="HTML";
let td12=  document.createElement('td');


let tr2 =  document.createElement('tr');
let td21 =  document.createElement('td');
let td22 =  document.createElement('td');
td21.innerHTML="CSS";

let tr3 =  document.createElement('tr');
let td31 =  document.createElement('td');
let td32=  document.createElement('td');
td31.innerHTML="JavaScript";


let tr4 =  document.createElement('tr');
let td41 =  document.createElement('td');
let td42 =  document.createElement('td');
td41.innerHTML="Python";


let tr5=  document.createElement('tr');
let td51 =  document.createElement('td');
let td52 =  document.createElement('td');
td51.innerHTML="JAVA";

let tr6 =  document.createElement('tr');
let td61 =  document.createElement('td');
let td62 =  document.createElement('td');
td61.innerHTML="BootStrap";


let tr7 =  document.createElement('tr');
let td71 =  document.createElement('td');
let td72 =  document.createElement('td');
td71.innerHTML="SQL";

skills.classList.add('skills');
hr2.classList.add('skills');


skills.appendChild(h2);
skills.appendChild(hr2);
skills.appendChild(table1);
table1.appendChild(tr1);
table1.appendChild(tr2);
table1.appendChild(tr3);
table1.appendChild(tr4);
table1.appendChild(tr5);
table1.appendChild(tr6);
table1.appendChild(tr7);
tr1.appendChild(td11);
tr1.appendChild(td12);

tr2.appendChild(td21);
tr2.appendChild(td22);

tr3.appendChild(td31);
tr3.appendChild(td32);

tr4.appendChild(td41);
tr4.appendChild(td42);

tr5.appendChild(td51);
tr5.appendChild(td52);

tr6.appendChild(td61);
tr6.appendChild(td62);

tr7.appendChild(td71);
tr7.appendChild(td72);

td12.appendChild(i11);
td12.appendChild(i12);
td12.appendChild(i13);
td12.appendChild(i14);
td12.appendChild(i15);

td22.appendChild(i21);
td22.appendChild(i22);
td22.appendChild(i23);
td22.appendChild(i24);
td22.appendChild(i25);

td32.appendChild(i31);
td32.appendChild(i32);
td32.appendChild(i33);
td32.appendChild(i34);
td32.appendChild(i35);

td42.appendChild(i41);
td42.appendChild(i42);
td42.appendChild(i43);
td42.appendChild(i44);
td42.appendChild(i45);

td52.appendChild(i51);
td52.appendChild(i52);
td52.appendChild(i53);
td52.appendChild(i54);
td52.appendChild(i55);

td62.appendChild(i61);
td62.appendChild(i62);
td62.appendChild(i63);
td62.appendChild(i64);
td62.appendChild(i65);


td72.appendChild(i71);
td72.appendChild(i72);
td72.appendChild(i73);
td72.appendChild(i74);
td72.appendChild(i75);


col1.appendChild(skills);


////////////////////////////////////////////
// SOFT SKILL Section
/////////////////////////////////

let softskills = document.createElement('div');
softskills.classList.add('soft')
let h22 = document.createElement('h2');
let hr3 = document.createElement('hr');

let icon11 = document.createElement('i');
icon11.classList.add('fa-solid');
icon11.classList.add("fa-circle");
icon11.classList.add("c1");


let icon12 = document.createElement('i');
icon12.classList.add('fa-solid');
icon12.classList.add("fa-circle");
icon12.classList.add("c1");


let icon13 = document.createElement('i');
icon13.classList.add('fa-solid');
icon13.classList.add("fa-circle");
icon13.classList.add("c1");

let icon14 = document.createElement('i');
icon14.classList.add('fa-solid');
icon14.classList.add("fa-circle");
icon14.classList.add("c1");

let icon15 = document.createElement('i');
icon15.classList.add('fa-solid');
icon15.classList.add("fa-circle");
icon15.classList.add("c1");


let icon21 = document.createElement('i');
icon21.classList.add('fa-solid');
icon21.classList.add("fa-circle");
icon21.classList.add("c1");


let icon22 = document.createElement('i');
icon22.classList.add('fa-solid');
icon22.classList.add("fa-circle");
icon22.classList.add("c1");


let icon23 = document.createElement('i');
icon23.classList.add('fa-solid');
icon23.classList.add("fa-circle");
icon23.classList.add("c1");


let icon24 = document.createElement('i');
icon24.classList.add('fa-solid');
icon24.classList.add("fa-circle");
icon24.classList.add("c1");


let icon25 = document.createElement('i');
icon25.classList.add('fa-solid');
icon25.classList.add("fa-circle");
icon25.classList.add("c1");

let icon31 = document.createElement('i');
icon31.classList.add('fa-solid');
icon31.classList.add("fa-circle");
icon31.classList.add("c1");


let icon32 = document.createElement('i');
icon32.classList.add('fa-solid');
icon32.classList.add("fa-circle");
icon32.classList.add("c1");


let icon33 = document.createElement('i');
icon33.classList.add('fa-solid');
icon33.classList.add("fa-circle");
icon33.classList.add("c1");


let icon34 = document.createElement('i');
icon34.classList.add('fa-solid');
icon34.classList.add("fa-circle");
icon34.classList.add("c1");


let icon35 = document.createElement('i');
icon35.classList.add('fa-solid');
icon35.classList.add("fa-circle");
icon35.classList.add("c1");


let icon41 = document.createElement('i');
icon41.classList.add('fa-solid');
icon41.classList.add("fa-circle");
icon41.classList.add("c1");


let icon42 = document.createElement('i');
icon42.classList.add('fa-solid');
icon42.classList.add("fa-circle");
icon42.classList.add("c1");


let icon43 = document.createElement('i');
icon43.classList.add('fa-solid');
icon43.classList.add("fa-circle");
icon43.classList.add("c1");


let icon44 = document.createElement('i');
icon44.classList.add('fa-solid');
icon44.classList.add("fa-circle");
icon44.classList.add("c1");


let icon45 = document.createElement('i');
icon45.classList.add('fa-solid');
icon45.classList.add("fa-circle");
icon45.classList.add("c1");

let icon51 = document.createElement('i');
icon51.classList.add('fa-solid');
icon51.classList.add("fa-circle");
icon51.classList.add("c1");


let icon52= document.createElement('i');
icon52.classList.add('fa-solid');
icon52.classList.add("fa-circle");
icon52.classList.add("c1");


let icon53 = document.createElement('i');
icon53.classList.add('fa-solid');
icon53.classList.add("fa-circle");
icon53.classList.add("c1");


let icon54 = document.createElement('i');
icon54.classList.add('fa-solid');
icon54.classList.add("fa-circle");
icon54.classList.add("c1");


let icon55 = document.createElement('i');
icon55.classList.add('fa-solid');
icon55.classList.add("fa-circle");
icon55.classList.add("c1");

let icon61 = document.createElement('i');
icon61.classList.add('fa-solid');
icon61.classList.add("fa-circle");
icon61.classList.add("c1");


let icon62 = document.createElement('i');
icon62.classList.add('fa-solid');
icon62.classList.add("fa-circle");
icon62.classList.add("c1");


let icon63 = document.createElement('i');
icon63.classList.add('fa-solid');
icon63.classList.add("fa-circle");
icon63.classList.add("c1");


let icon64 = document.createElement('i');
icon64.classList.add('fa-solid');
icon64.classList.add("fa-circle");
icon64.classList.add("c1");


let icon65 = document.createElement('i');
icon65.classList.add('fa-solid');
icon65.classList.add("fa-circle");
icon65.classList.add("c1");


let icon71 = document.createElement('i');
icon71.classList.add('fa-solid');
icon71.classList.add("fa-circle");
icon71.classList.add("c1");


let icon72 = document.createElement('i');
icon72.classList.add('fa-solid');
icon72.classList.add("fa-circle");
icon72.classList.add("c1");


let icon73 = document.createElement('i');
icon73.classList.add('fa-solid');
icon73.classList.add("fa-circle");
icon73.classList.add("c1");


let icon74 = document.createElement('i');
icon74.classList.add('fa-solid');
icon74.classList.add("fa-circle");
icon74.classList.add("c1");


let icon75 = document.createElement('i');
icon75.classList.add('fa-solid');
icon75.classList.add("fa-circle");
icon75.classList.add("c1");



let table2 = document.createElement('table');
let tr21 =  document.createElement('tr');
let tr22 =  document.createElement('tr');
let tr23 =  document.createElement('tr');

let tr24 =  document.createElement('tr');

let tr25 =  document.createElement('tr');

let tr26 =  document.createElement('tr');
let tr27 =  document.createElement('tr');

let td211 = document.createElement('td');
td211.innerHTML="Leadership";
let td212 = document.createElement('td');
td212.appendChild(icon11);
td212.appendChild(icon12);
td212.appendChild(icon13);
td212.appendChild(icon14);
td212.appendChild(icon15);

let td221 = document.createElement('td');
td221.innerHTML="Organization";

let td222 = document.createElement('td');
td222.appendChild(icon21);
td222.appendChild(icon22);
td222.appendChild(icon23);
td222.appendChild(icon24);
td222.appendChild(icon25);

let td231 = document.createElement('td');
td231.innerHTML="Problem Solving";
let td232 = document.createElement('td');
td232.appendChild(icon31);
td232.appendChild(icon32);
td232.appendChild(icon33);
td232.appendChild(icon34);
td232.appendChild(icon35);

let td241 = document.createElement('td');
td241.innerHTML="Planning";
let td242 = document.createElement('td');
td242.appendChild(icon41);
td242.appendChild(icon42);
td242.appendChild(icon43);
td242.appendChild(icon44);
td242.appendChild(icon45);

let td251 = document.createElement('td');
td251.innerHTML="Management";
let td252 = document.createElement('td');
td252.appendChild(icon51);
td252.appendChild(icon52);
td252.appendChild(icon53);
td252.appendChild(icon54);
td252.appendChild(icon55);

let td261 = document.createElement('td');
td261.innerHTML="Delegation";
let td262 = document.createElement('td');
td262.appendChild(icon61);
td262.appendChild(icon62);
td262.appendChild(icon63);
td262.appendChild(icon64);
td262.appendChild(icon65);

let td271 = document.createElement('td');
td271.innerHTML="Decision making";
let td272 = document.createElement('td');
td272.appendChild(icon71);
td272.appendChild(icon72);
td272.appendChild(icon73);
td272.appendChild(icon74);
td272.appendChild(icon75);






h22.innerHTML="Soft Skills";











col1.appendChild(softskills);
softskills.appendChild(h22);
softskills.appendChild(hr3);
softskills.appendChild(table2);
table2.appendChild(tr21);
table2.appendChild(tr22);
table2.appendChild(tr23);
table2.appendChild(tr24);
table2.appendChild(tr25);
table2.appendChild(tr26);
table2.appendChild(tr27);

tr21.appendChild(td211);
tr21.appendChild(td212);

tr22.appendChild(td221);
tr22.appendChild(td222);

tr23.appendChild(td231);
tr23.appendChild(td232);

tr24.appendChild(td241);
tr24.appendChild(td242);

tr25.appendChild(td251);
tr25.appendChild(td252);

tr26.appendChild(td261);
tr26.appendChild(td262);

tr27.appendChild(td271);
tr27.appendChild(td272);


let footer = document.createElement('footer');
col1.appendChild(footer);


let col2 = document.createElement('div');
col2.classList.add('col-2');
let about = document.createElement('div');
about.classList.add('about')
let h4 = document.createElement('h2');
h4.innerText="Summary";
let hr4 = document.createElement('hr');
let para1= document.createElement('p');
para1.classList.add('intro');
para1.innerText="Hey everyone! I'm Vipul Goutam, and I'm a web developer who lives and breathes code and design. I love creating beautiful, user-friendly websites and constantly learning new technologies to stay ahead of the curve. Whether it's building intuitive interfaces or making websites visually stunning, I pour my passion into every project, always striving to exceed expectations.";

about.appendChild(h4);
about.appendChild(hr4);
about.appendChild(para1);
col2.appendChild(about);
container.appendChild(col2);







let edu = document.createElement('div');
edu.classList.add("education");
let h5 = document.createElement('h2');
h5.innerHTML="Education";
let hr5 = document.createElement('hr');

let tab1 = document.createElement('table');


let tabtr1 = document.createElement('tr');
let tabtd1 = document.createElement('td');
tabtd1.classList.add("school");
tabtd1.innerText="Kendriya Vidyalaya Nagrota,Jammu";
let tabtd2 = document.createElement('td');
tabtd2.classList.add("year");
tabtd2.innerText="2019";



let tabtr2 = document.createElement('tr');
let tabtd21 = document.createElement('td');
tabtd21.classList.add("degree");
tabtd21.innerText="Higher Secondary Education";
let tabtd22 = document.createElement('td');



let tab2 = document.createElement('table');


let tabtr01 = document.createElement('tr');
let tabtd011 = document.createElement('td');
tabtd011.classList.add("school");
tabtd011.innerText="UIET Kurukshetra,Kurukshetra University";
let tabtd012 = document.createElement('td');
tabtd012.classList.add("year");
tabtd012.innerText="2023";





let tabtr02 = document.createElement('tr');
let tabtd021 = document.createElement('td');
tabtd021.classList.add("degree");
tabtd021.innerText="Higher Secondary Education";
let tabtd022 = document.createElement('td');





tab1.appendChild(tabtr1);
tab2.appendChild(tabtr2);

tabtr1.appendChild(tabtd1);
tabtr1.appendChild(tabtd2);
tabtr2.appendChild(tabtd21);
tabtr2.appendChild(tabtd22);



tab2.appendChild(tabtr01);
tab2.appendChild(tabtr02);

tabtr02.appendChild(tabtd021);
tabtr02.appendChild(tabtd022);
tabtr01.appendChild(tabtd011)
tabtr01.appendChild(tabtd012);



edu.appendChild(h5);
edu.appendChild(hr5);
edu.appendChild(tab1);
edu.appendChild(tab2);
col2.appendChild(edu)





let pro = document.createElement('div');
pro.classList.add('projects');
let h6 = document.createElement('h2');
h6.innerText="Projects"


let hr6 = document.createElement('hr');


let prpara = document.createElement('p');

prpara.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi, dolorem similique doloremque dicta quas consectetur inventore officiis ullam animi vero? Deleniti exercitationem harum fuga nam, odit neque, eaque ratione velit enim dicta in? Possimus ut similique ipsum adipisci fugit odit qui porro pariatur quo illo explicabo ipsa eligendi repudiandae, magnam corrupti autem error animi deleniti quos aperiam earum totam. Laboriosam magnam eveniet at aliquam unde, vel, laborum quod ex molestias reiciendis pariatur deleniti nostrum autem facere, labore distinctio! Molestias optio quis laboriosam corporis dolorum quia libero? Dolor ut perspiciatis officiis numquam sunt, a soluta nemo asperiores amet, similique alias atque, consectetur iusto commodi odit cumque repudiandae et sit quod! Rerum et sapiente exercitationem dignissimos distinctio ipsum quae nesciunt maxime tempore vitae voluptatem,";

pro.appendChild(h6);
pro.appendChild(hr6);
pro.appendChild(prpara);
col2.appendChild(pro);



let car = document.createElement('div');
car.classList.add('career');
let h7 = document.createElement('h2');
h7.innerText="Career";


let hr7 = document.createElement('hr');


let crpara = document.createElement('p');

crpara.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi, dolorem similique doloremque dicta quas consectetur inventore officiis ullam animi vero? Deleniti exercitationem harum fuga nam, odit neque, eaque ratione velit enim dicta in? Possimus ut similique ipsum adipisci fugit odit qui porro pariatur quo illo explicabo ipsa eligendi repudiandae, magnam corrupti autem error animi deleniti quos aperiam earum totam. Laboriosam magnam eveniet at aliquam unde, vel, laborum quod ex molestias reiciendis pariatur deleniti nostrum autem facere, labore distinctio! Molestias optio quis laboriosam corporis dolorum quia libero? Dolor ut perspiciatis officiis numquam sunt, a soluta nemo asperiores amet, similique alias atque, consectetur iusto commodi odit cumque repudiandae et sit quod! Rerum et sapiente exercitationem dignissimos distinctio ipsum quae nesciunt maxime tempore vitae voluptatem,";

car.appendChild(h7);
car.appendChild(hr7);
car.appendChild(crpara);
col2.appendChild(car);



let cer = document.createElement('div');
cer.classList.add('certifications');
let h8 = document.createElement('h2');
h8.innerText="Certifications"


let hr8 = document.createElement('hr');


let cerpara = document.createElement('p');

cerpara.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni recusandae tempore quidem ut similique debitis accusamus harum, alias veritatis vel quaerat minus odit asperiores rerum consequatur iusto eveniet esse perferendis. Atque placeat deleniti quo iusto. Voluptate tempora hic alias distinctio laboriosam tempore, modi sed reprehenderit pariatur ut? Aut, quisquam quibusdam.";

cer.appendChild(h8);
cer.appendChild(hr8);
cer.appendChild(cerpara);
col2.appendChild(cer);










document.body.appendChild(container);

let star = document.getElementsByTagName('*');

document.body.style.backgroundColor="#e0e1dd";
name1.style.fontSize="15px";


container.style.backgroundColor="#fff";
container.style.maxWidth="40%";
container.style.margin="auto";
container.style.display="flex";
container.style.boxShadow="0px 0px 4px";

// const note = document.getElementsByTagName('td');
// for (i=0;i<note.length;i++){
// note[i].style.padding="7px 0px";
// }

let rd = document.querySelector('.name');
rd.style.display="grid";
rd.style.backgroundColor="red";


const head= document.getElementsByTagName('h2');
console.log(head);
console.log("HEllo");
