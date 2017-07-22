<template lang="pug">
  #app
    h1 Vue.js 애플리케이션 + 비동기 통신
    img(src="./assets/logo.png" alt="Vue")

    .panel.panel-default
      .panel-heading
        h3 Book 추가
      .panel-body
        form.form-inline(@submit.prevent="addBook")
          .form-group
            label.sr-only(for="book_title") 제목:
            input.form-control#book_title(placeholder="제목" @input="updateBookTitle" :value="new_book.title")
          .form-group
            label.sr-only(for="book_author") 저자:
            input.form-control#book_author(placeholder="저자" @input="updateBookAuthor" :value="new_book.author")
          .form-group
            label.sr-only(for="book_link") 링크:
            input.form-control#book_link(placeholder="링크" @input="updateBookLink" :value="new_book.link")
          button(type="submit").btn.btn-default 등록
    .panel.panel-default
      .panel-heading
        h3 Firebase 데이터 Books
      .panel-body
        table.table.table-condensed
          caption Books
          thead
            tr
              th(scope="col") 제목
              th(scope="col") 저자
          tbody
            tr(v-for="book in books")
              td
                a.book-title(:href="book.link") {{book.title}}
              td
                strong.book-author {{ book.author }}

</template>

<script>
export default {
  name: 'app',
  created () {
    this.getFirebaseData();
  },
  data () {
    return {
      books: [],
      new_book: {
        title: '',
        author: '',
        link: ''
      }
    }
  },
  methods: {
    getFirebaseData(){
      // App 컴포넌트 참조 변수
      let app = this;
      // Vue Resource 객체의 get() 메서드를 사용
      // Proimse 객체를 반환
      this.$http.get('').then(success, fail);

      // 통신 성공할 경우 콜백 함수
      function success(response){
        app.books = response.data;
        // return response.json();
      }
      // 통신 실패 시에 콜백 함수
      function fail(error){
        console.error(error.message);
      }
    },
    addBook(){

      // 유효성 검사
      let book = this.new_book;
      let alert_prop = '';
      for ( let prop in book ) {
        if ( book.hasOwnProperty(prop) && book[prop].trim() === '' ) {
          switch(prop) {
            case 'title': alert_prop = '제목'; break;
            case 'author': alert_prop = '저자'; break;
            case 'link': alert_prop = '링크';
          }
          window.alert(`${alert_prop} 입력 필드를 채워주세요.`);
          document.querySelector(`#book_${prop}`).focus();
          return; // 함수 종료
        }
      }

      // Firebase 통신 수행
      // POST 통신(콘텐츠 추가)
      this.$http
        .post('', book)
        .then(
          response=>{
            // 등록 버튼 누른 후에 View를 업데이트 하는 방법
            // 다시 GET 한다.
              this.getFirebaseData();
          },
          error=>{
            console.error(error.message);
          }
        );
    },
    updateBookTitle(e){
      this.new_book.title = e.target.value;
    },
    updateBookAuthor(e){
      this.new_book.author = e.target.value;
    },
    updateBookLink(e){
      this.new_book.link = e.target.value;
    },
  }
}
</script>

<style lang="sass">
html
  font-size: 100%
  background: #fff
body
  margin: 0

#app
  text-align: center
  font-size: 18px

  .form,
  .books-list
    text-align: left

  .table
    th, td
      text-align: left
</style>
