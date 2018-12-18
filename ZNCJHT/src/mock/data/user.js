import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某',
    time:'4545'
  }
];

const Users = [];

for (let i = 0; i < 89; i++) {
    Users.push(Mock.mock({
    //用户账号
        useid: Mock.mock('@string("lower", 5)'),
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1),
        //角色
        role: Mock.Random.integer(0,1,2),
        type: Mock.Random.integer(0,1,2), //检测类别
        //部门
        department: Mock.Random.csentence(7),
        //警员编号 
        roleid: Mock.Random.string('lower', 5),
        //用户状态
        state: Mock.Random.integer(0,1,2),
        //文字信息
        num: Mock.mock('@csentence'),
        allyj:Mock.mock('@string("number", 2)'),
    
    }));
}

const Sys = [];

for (let i = 0; i < 9; i++) {
    Sys.push({
        useid: Mock.mock('@string("lower", 5)'),
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
    })
}


export { LoginUsers, Users ,Sys };
