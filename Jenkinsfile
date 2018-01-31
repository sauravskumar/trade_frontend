pipeline {
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          image 'node'
          args '-p 3000:3000 --name trade_frontend'
        }
        
      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        sh 'docker'
      }
    }
  }
}