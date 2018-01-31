pipeline {
  agent {
    node {
      label 'master'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t localhost:5000/trade_frontend . && docker push localhost:5000/trade_backend'
      }
    }
    stage('Deploy') {
      agent any
      steps {
        sh 'docker-compose'
        sh 'pwd'
        sh 'docker ps -a && docker images'
      }
    }
  }
}