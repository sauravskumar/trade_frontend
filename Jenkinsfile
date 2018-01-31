pipeline {
  agent {
    node {
      label 'master'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t localhost:5000/trade_frontend . && docker push localhost:5000/trade_frontend'
      }
    }
    stage('Test') {
      agent any
      steps {
        echo 'Add Test stage'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker rm trade_frontend'
        sh 'docker run --name trade_frontend -p 3000:3000 localhost:5000/trade_frontend /bin/bash -c "ls"'
      }
    }
  }
}
