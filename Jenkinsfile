pipeline {
  agent {
    docker {
      image 'node'
      args '-p 3000:3000 --name trade_frontend'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Deliver') {
      steps {
        sh 'npm run start'
      }
    }
  }
}