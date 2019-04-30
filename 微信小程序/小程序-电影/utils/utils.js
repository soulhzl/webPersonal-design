function convertStars(star) {
  let num = star.toString().substring(0, 1);

  let array = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    }
  }

  return array;
}

function http(url, callback) {
  wx.request({
    url: url,
    data: {},
    method: 'GET',
    header: {
      "Content-Type": "application/xml"
    },
    success: function(res) {
      callback(res.data);
    }
  });
}

function convertCast(casts) {
  let castjoin = '';
  for (let idx in casts) {
    castjoin = castjoin + casts[idx].name + '/';
  }

  return castjoin.substring(0, castjoin.length - 1);
}

function convertCastInfo(casts) {
  let castArr = [];
  for (let idx in casts) {
    let cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : '',
      name: casts[idx].name
    }

    castArr.push(cast);
  }

  return castArr;
}

export {
  convertStars,
  http,
  convertCast,
  convertCastInfo
};