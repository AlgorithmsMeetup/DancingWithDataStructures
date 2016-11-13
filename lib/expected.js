const expected = (a) => {if(!a||a<2)return[];for(var b={},c=[2],d=3;d<=a;d+=2)if(!b[d]){c.push(d);for(var e=d,f=e*d;f<=a;)b[f]=!0,e+=2,f=e*d}return c}
