pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'cd /usr/src/app && npm run start'
      }
    }
    stage('') {
      steps {
        sh 'docker'
      }
    }
  }
}