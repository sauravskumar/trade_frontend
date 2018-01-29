pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
    
  }
  stages {
    stage('Deliver') {
      steps {
        sh 'npm run start'
      }
    }
  }
}