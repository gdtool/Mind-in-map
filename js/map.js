// function load_jsmind(){
//     var mind = {
//         "meta":{
//             "name":"demo",
//             "author":"hizzgdev@163.com",
//             "version":"0.2",
//         },
//         "format":"node_array",
//         "data":[
//             {"id":"root", "isroot":true, "topic":"jsMind"},

//             {"id":"sub1", "parentid":"root", "topic":"sub1"},
//             {"id":"sub11", "parentid":"sub1", "topic":"sub11"},
//             {"id":"sub12", "parentid":"sub1", "topic":"sub12"},
//             {"id":"sub13", "parentid":"sub1", "topic":"sub13"},

//             {"id":"sub2", "parentid":"root", "topic":"sub2"},
//             {"id":"sub21", "parentid":"sub2", "topic":"sub21"},
//             {"id":"sub22", "parentid":"sub2", "topic":"sub22"},

//             {"id":"sub3", "parentid":"root", "topic":"sub3"},
//         ]
//     };
//     var options = {
//         container:'jsmind_container',
//         editable:true,
//         theme:'greensea',
//         mode: 'full',
//         support_html : true,
//         shortcut: {
//             mapping:{
//                 addchild : 45, 	// <Insert>
//                 addbrother : 13, // <Enter>
//                 editnode : 113, 	// <F2>
//                 delnode : 46, 	// <Delete>
//                 toggle : 32, 	// <Space>
//                 left : 37, 		// <Left>
//                 up : 38, 		// <Up>
//                 right : 39, 		// <Right>
//                 down : 40, 		// <Down>
//             }
//         },
//     }
//     var jm = jsMind.show(options,mind);
//     // jm.set_readonly(true);
//     // var mind_data = jm.get_data();
//     // alert(mind_data);
//     // jm.add_node("sub2","sub23", "new node", {"background-color":"red"});
//     // jm.set_node_color('sub21', 'green', '#ccc');
// }

// load_jsmind();