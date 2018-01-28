pipeline {
  agent {
    docker {
      image 'node'
      args '-p 10000:10000 --name trade_frontend'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm build'
      }
    }
    stage('Deliver') {
      steps {
        sh 'npm start'
      }
    }
  }
}