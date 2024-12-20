const districts = {
    '경기도': ['여주시', '김포시', '화성시', '평택시', '의정부시', '부천시오정구', '과천시', '안양시동안구', '오산시', '안산시상록구', '군포시', '남양주시', '안양시만안구', '용인시처인구', '안양시', '의왕시', '성남시', '수원시권선구', '부천시원미구', '용인시수지구', '수원시팔달구', '고양시일산서구', '안성시', '동두천시', '수원시영통구', '이천시', '성남시분당구', '수원시장안구', '부천시', '안산시단원구', '광명시', '성남시수정구', '고양시일산서구', '고양시', '수원시', '광주시', '시흥시', '파주시', '고양시덕양구', '양주시', '용인시기흥구', '하남시', '고양시일산동구', '용인시기흥구', '안산시', '성남시수정구', '용인시수지구', '고양시덕양구', '시전체', '성남시분당구', '양평군', '구리시', '수원시장안구', '용인시', '가평군', '성남시중원구', '안산시상록구', '안산시단원구', '포천시', '수원시영통구', '성남시중원구', '연천군', '부천시소사구', '고양시일산동구', '수원시권선구', '안양시동안구', '안양시만안구', '용인시처인구', '부천시원미구', '부천시소사구', '부천시오정구'],
    '세종특별자치시': ['세종특별자치시'],
    '충청북도': ['영동군', '청주시흥덕구', '충주시', '청주시', '청주시청원구', '청주시흥덕구', '청주시상당구', '제천시', '단양군', '진천군', '청주시서원구', '청주시서원구', '청주시청원구', '음성군', '옥천군', '보은군', '괴산군', '증평군', '청주시상당구', '전체'],
    '충청남도': ['예산군', '아산시', '태안군', '천안시서북구', '천안시서북구', '공주시', '청양군', '당진시', '홍성군', '서산시', '보령시', '천안시', '천안시동남구', '계룡시', '서천군', '부여군', '금산군', '천안시동남구', '논산시', '전체'],
    '전라북도': ["고창군", "광산구", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시 덕진구", "전주시 완산구", "전주시", "전주시덕진구", "전주시완산구", "전체", "정읍시", "진안군"],    
    '전라남도': ['목포시', '화순군', '순천시', '광양시', '곡성군', '해남군', '여수시', '신안군', '영광군', '장성군', '강진군', '장흥군', '영암군', '고흥군', '구례군', '나주시', '담양군', '진도군', '무안군', '보성군', '완도군', '전체', '함평군'],
    '경상북도': ['구미시', '포항시북구', '경주시', '안동시', '상주시', '경산시', '포항시', '영주시', '김천시', '봉화군', '칠곡군', '포항시남구', '문경시', '울진군', '포항시남구', '영양군', '성주군', '영천시', '고령군', '군위군', '청도군', '영덕군', '예천군', '울릉군', '의성군', '청송군', '수성구', '전체', '포항시북구'],
    '경상남도': ['창원시', '김해시', '통영시', '창원시성산구', '양산시', '의령군', '창원시마산합포구', '함안군', '사천시', '창원시의창구', '진주시', '고성군', '함양군', '거제시', '창원시진해구', '합천군', '창원시마산합포구', '도전체', '거창군', '하동군', '산청군', '남해군', '창녕군', '밀양시', '창원시마산회원구', '동구', '창원시의창구', '창원시마산회원구', '창원시진해구', '창원시성산구'],
    '제주특별자치도': ['제주시', '서귀포시'],
    '울산광역시': ['남구', '중구', '북구', '울주군', '동구', '전체'],
    '대전광역시': ['서구', '동구', '중구', '유성구', '대덕구', '전체'],
    '광주광역시': ['서구', '동구', '광산구', '북구', '남구', '전체'],
    '인천광역시': ['서구', '미추홀구', '연수구', '부평구', '남동구', '계양구', '동구', '중구', '강화군', '전체', '옹진군', '남구'],
    '대구광역시': ['동구', '수성구', '중구', '달서구', '달성군', '영천시', '전체', '남구', '북구', '서구', '경산시', '군위군', '칠곡군', '포항시북구'],
    '부산광역시': ['북구', '동래구', '남구', '해운대구', '전체', '기장군', '사상구', '서구', '동구', '강서구', '금정구', '수영구', '연제구', '영도구', '부산진구', '사하구', '중구'],
    '강원특별자치도': ['철원군', '홍천군', '춘천시', '동해시', '평창군', '강릉시', '인제군', '고성군', '원주시', '횡성군', '태백시', '삼척시', '영월군', '속초시', '양양군', '양구군', '정선군', '화천군', '전체'],
    '서울특별시': ['송파구', '성동구', '용산구', '노원구', '강서구', '강남구', '서초구', '도봉구', '서대문구', '관악구', '강동구', '중구', '전체', '성북구', '동대문구', '마포구', '양천구', '금천구', '광진구', '영등포구', '구로구', '동작구', '은평구', '강북구', '종로구', '중랑구']
};


document.addEventListener("DOMContentLoaded", function() {
    const citySelect = document.getElementById("ctprvn_nm");
    const districtSelect = document.getElementById("signgu_nm");

    const userCity = "{{ request.session.city|default:'' }}";
    const userDistrict = "{{ request.session.district|default:'' }}";

    if (userCity) {
        citySelect.value = userCity;

        const districtsForCity = districts[userCity] || [];
        districtSelect.innerHTML = "<option value=''>시군구</option>";

        districtsForCity.forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            if (district === userDistrict) {
                option.selected = true;
            }
            districtSelect.appendChild(option);
        });
    }

    citySelect.addEventListener("change", function() {
        const selectedCity = citySelect.value;
        const districtsForCity = districts[selectedCity] || [];

        districtSelect.innerHTML = "<option value=''>시군구</option>";

        districtsForCity.forEach(function(district) {
            const option = document.createElement("option");
            option.value = district;
            option.text = district;
            districtSelect.appendChild(option);
        });
    });
});

function filterBySport(sport) {
    const rows = document.querySelectorAll('.club-row');
    rows.forEach(row => {
        if (sport === '' || row.dataset.sport === sport) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });

    var navbarCollapse = document.querySelector('.collapse');
    var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    });
    bsCollapse.hide();
}

