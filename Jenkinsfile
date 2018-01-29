pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Deliver') {
      parallel {
        stage('Deliver') {
          steps {
            sh 'npm run start'
          }
        }
        stage('Build') {
          steps {
            sh 'ls'
          }
        }
      }
    }
  }
}