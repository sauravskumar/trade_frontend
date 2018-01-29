pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'pwd && cd /usr/src/app && docker'
      }
    }
    stage('Test') {
      steps {
        sh 'ls'
      }
    }
  }
}