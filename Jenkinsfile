pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'pwd && ls'
        sh 'cd /usr/src/app && ls'
        sh 'pwd && cd /usr/src/app && npm run start'
      }
    }
  }
}