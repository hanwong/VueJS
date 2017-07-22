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
          button(type="button").btn.btn-default 등록
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
  beforeCreate () {

    // App 컴포넌트 참조 변수
    let app = this;
    // Vue Resource 객체의 get() 메서드를 사용
    let resource = this.$http.get('https://vue-aync-comm-ce798.firebaseio.com/books.json');
    // Proimse 객체를 반환
    resource
      .then(success, fail)
      // .then(data => console.log(data));

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
