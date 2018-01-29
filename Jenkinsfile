pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'cd /usr/src/app'
      }
    }
    stage('') {
      agent {
        docker {
          image 'node'
          args '-p 3000:3000 --name \'trade_frontend\''
        }
        
      }
      steps {
        sh 'ls'
      }
    }
  }
}