const prefix             = require('gulp-autoprefixer')
const sync               = require('browser-sync').create()
const gulp               = require('gulp')
const pug                = require('gulp-pug')
const sass               = require('gulp-sass')
const maps               = require('gulp-sourcemaps')

gulp.task('watch', () => {
  sync.init({
    server: {
      baseDir: 'dist',
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  })

  gulp.watch('**/*.scss', ['sass'])
  gulp.watch('**/*.pug' , ['pug'])
  gulp.watch('**/*.html').on('change', sync.reload)
})

gulp.task('sass', () => {
  return gulp.src('main.scss')
    .pipe(maps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(maps.write())
    .pipe(prefix())
    .pipe(gulp.dest('./dist'))
    .pipe(sync.stream())
})

gulp.task('pug', () => {
  return gulp.src('index.pug')
    .pipe(pug({
      data: {
        menus: {
          primary: [
            {
              name: 'Open Source',
              href: '/oss'
            },
            {
              name: 'Client Work',
              href: '/clients'
            },
            {
              name: 'Talks',
              href: '/talks'
            },
            {
              name: 'Me',
              href: '/me'
            },
            {
              name: 'Blog',
              href: '/blahhhg'
            }
          ],
          secondary: [
            {
              name: 'Twitter',
              href: '/oss'
            },
            {
              name: 'GitHub',
              href: '/clients'
            },
            {
              name: 'CodePen',
              href: '/talks'
            }
          ],
          footer: [

          ]
        },
        feed: [
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Vivamus semper ante diam, eget fringilla nibh interdum in. In felis neque, ultricies vel bibendum nec, suscipit ac tellus. Integer in elit felis. Donec imperdiet iaculis sapien nec aliquam. In sodales vel est et faucibus. Etiam eleifend, erat in pretium blandit, arcu risus vestibulum dolor, in euismod augue sem ac mauris. Aenean ligula odio, venenatis laoreet semper eget, bibendum non nibh. Cras gravida ex turpis, eget vulputate risus rutrum non.\n\nVivamus viverra justo at lacus ultricies imperdiet. In placerat purus sed purus mollis, vel congue justo blandit. Etiam non ex diam. Vestibulum velit sapien, volutpat sit amet tellus quis, ullamcorper imperdiet nunc. Etiam eget ornare tortor, id semper quam. In vitae sapien nisi. Nunc placerat vel urna a aliquet. Mauris in velit sit amet enim mollis tincidunt scelerisque non nunc. Aenean mattis mollis nulla vitae consectetur. Nulla consectetur quam non erat mollis, vel auctor lacus fermentum. Morbi dictum ultricies est vel vulputate. Suspendisse potenti. Etiam cursus mollis sapien pulvinar suscipit. Nulla aliquet quam at erat viverra molestie.',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
          {
            title: 'Article 1',
            image: 'https://i.redd.it/qp1zgbkyyc9z.jpg',
            excerpt: 'Lorem ipsum dolorem sit',
            categories: [
              'Open Source',
              'Client Work'
            ],
            tags: [
              'WordPress',
              'JavaScript'
            ]
          },
        ]
      }
    }))
    .pipe(gulp.dest('./dist'))
})
