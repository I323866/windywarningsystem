import Mock from 'mockjs';
import png from '../admin.png'
import  moment from  'moment'
const LoginUsers = [
  {
    id: 1,
    username: 'hqyb',
    password: '123456',
    avatar: png,
    name: '虹桥预报'
  }
];

const Users = [];
var now = moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss');
Users.push({    time: now,
  priority: 1,
  message: "告警"});
Users.push({    time: now,
  priority: 2,
  message: "告警"});
for (let i = 0; i < 5; i++) {
  Users.push(Mock.mock({
    time: now,
    priority: 3,
    message: "正常"
    // id: Mock.Random.guid(),
    // name: Mock.Random.cname(),
    // addr: Mock.mock('@county(true)'),
    // 'age|18-60': 1,
    // birth: Mock.Random.date(),
    // sex: Mock.Random.integer(0, 1)
  }));
}
Users.push({    time: now,
  priority: 1,
  message: "告警"});

export { LoginUsers, Users };
