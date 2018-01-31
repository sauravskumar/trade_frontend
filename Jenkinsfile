pipeline {
  agent {
    node {
      label 'master'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t trade_backend .'
        sh 'docker run -d --name trade_frontend -p 3000:3000 trade_frontend'
        sh 'docker exec trade_frontend /bin/bash && ls && pwd'
      }
    }
    stage('Deploy') {
      agent {
        node {
          label 'master'
        }
        
      }
      steps {
        sh 'ls'
        sh 'pwd'
        sh 'docker ps -a && docker images'
      }
    }
  }
}